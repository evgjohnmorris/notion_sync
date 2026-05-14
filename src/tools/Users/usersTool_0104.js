/**
 * Generated Tool: usersTool_0104
 * Domain: Users
 * ID: 0104
 */
exports.usersTool_0104 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0104:', error);
    throw error;
  }
};
