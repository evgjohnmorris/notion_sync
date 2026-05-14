/**
 * Generated Tool: usersTool_0071
 * Domain: Users
 * ID: 0071
 */
exports.usersTool_0071 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0071:', error);
    throw error;
  }
};
