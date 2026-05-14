/**
 * Generated Tool: usersTool_0938
 * Domain: Users
 * ID: 0938
 */
exports.usersTool_0938 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0938:', error);
    throw error;
  }
};
