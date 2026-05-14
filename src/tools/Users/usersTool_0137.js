/**
 * Generated Tool: usersTool_0137
 * Domain: Users
 * ID: 0137
 */
exports.usersTool_0137 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0137:', error);
    throw error;
  }
};
