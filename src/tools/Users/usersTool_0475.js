/**
 * Generated Tool: usersTool_0475
 * Domain: Users
 * ID: 0475
 */
exports.usersTool_0475 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0475:', error);
    throw error;
  }
};
