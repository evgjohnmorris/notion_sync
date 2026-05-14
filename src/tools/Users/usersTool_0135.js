/**
 * Generated Tool: usersTool_0135
 * Domain: Users
 * ID: 0135
 */
exports.usersTool_0135 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0135:', error);
    throw error;
  }
};
