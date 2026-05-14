/**
 * Generated Tool: usersTool_0116
 * Domain: Users
 * ID: 0116
 */
exports.usersTool_0116 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0116:', error);
    throw error;
  }
};
