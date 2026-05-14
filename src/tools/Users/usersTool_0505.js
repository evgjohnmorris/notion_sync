/**
 * Generated Tool: usersTool_0505
 * Domain: Users
 * ID: 0505
 */
exports.usersTool_0505 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0505:', error);
    throw error;
  }
};
