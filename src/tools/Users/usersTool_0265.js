/**
 * Generated Tool: usersTool_0265
 * Domain: Users
 * ID: 0265
 */
exports.usersTool_0265 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0265:', error);
    throw error;
  }
};
