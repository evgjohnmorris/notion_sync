/**
 * Generated Tool: usersTool_0942
 * Domain: Users
 * ID: 0942
 */
exports.usersTool_0942 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0942:', error);
    throw error;
  }
};
