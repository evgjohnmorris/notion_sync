/**
 * Generated Tool: usersTool_0391
 * Domain: Users
 * ID: 0391
 */
exports.usersTool_0391 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0391:', error);
    throw error;
  }
};
