/**
 * Generated Tool: usersTool_0750
 * Domain: Users
 * ID: 0750
 */
exports.usersTool_0750 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0750:', error);
    throw error;
  }
};
