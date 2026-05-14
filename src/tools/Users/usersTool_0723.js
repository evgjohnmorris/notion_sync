/**
 * Generated Tool: usersTool_0723
 * Domain: Users
 * ID: 0723
 */
exports.usersTool_0723 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0723:', error);
    throw error;
  }
};
