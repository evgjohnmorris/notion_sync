/**
 * Generated Tool: usersTool_0915
 * Domain: Users
 * ID: 0915
 */
exports.usersTool_0915 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0915:', error);
    throw error;
  }
};
