/**
 * Generated Tool: usersTool_0377
 * Domain: Users
 * ID: 0377
 */
exports.usersTool_0377 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0377:', error);
    throw error;
  }
};
