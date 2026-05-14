/**
 * Generated Tool: usersTool_0248
 * Domain: Users
 * ID: 0248
 */
exports.usersTool_0248 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0248:', error);
    throw error;
  }
};
