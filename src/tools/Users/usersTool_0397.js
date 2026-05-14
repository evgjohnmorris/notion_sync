/**
 * Generated Tool: usersTool_0397
 * Domain: Users
 * ID: 0397
 */
exports.usersTool_0397 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0397:', error);
    throw error;
  }
};
