/**
 * Generated Tool: usersTool_0483
 * Domain: Users
 * ID: 0483
 */
exports.usersTool_0483 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0483:', error);
    throw error;
  }
};
