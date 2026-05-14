/**
 * Generated Tool: usersTool_0937
 * Domain: Users
 * ID: 0937
 */
exports.usersTool_0937 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0937:', error);
    throw error;
  }
};
