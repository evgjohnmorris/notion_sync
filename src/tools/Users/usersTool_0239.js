/**
 * Generated Tool: usersTool_0239
 * Domain: Users
 * ID: 0239
 */
exports.usersTool_0239 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0239:', error);
    throw error;
  }
};
