/**
 * Generated Tool: usersTool_0583
 * Domain: Users
 * ID: 0583
 */
exports.usersTool_0583 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0583:', error);
    throw error;
  }
};
