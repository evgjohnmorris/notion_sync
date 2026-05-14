/**
 * Generated Tool: usersTool_0730
 * Domain: Users
 * ID: 0730
 */
exports.usersTool_0730 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0730:', error);
    throw error;
  }
};
