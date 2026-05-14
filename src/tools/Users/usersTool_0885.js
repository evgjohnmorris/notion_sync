/**
 * Generated Tool: usersTool_0885
 * Domain: Users
 * ID: 0885
 */
exports.usersTool_0885 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0885:', error);
    throw error;
  }
};
