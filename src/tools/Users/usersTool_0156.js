/**
 * Generated Tool: usersTool_0156
 * Domain: Users
 * ID: 0156
 */
exports.usersTool_0156 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0156:', error);
    throw error;
  }
};
