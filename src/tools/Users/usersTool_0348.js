/**
 * Generated Tool: usersTool_0348
 * Domain: Users
 * ID: 0348
 */
exports.usersTool_0348 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0348:', error);
    throw error;
  }
};
