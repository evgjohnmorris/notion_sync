/**
 * Generated Tool: usersTool_0807
 * Domain: Users
 * ID: 0807
 */
exports.usersTool_0807 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0807:', error);
    throw error;
  }
};
