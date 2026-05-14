/**
 * Generated Tool: usersTool_0146
 * Domain: Users
 * ID: 0146
 */
exports.usersTool_0146 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0146:', error);
    throw error;
  }
};
