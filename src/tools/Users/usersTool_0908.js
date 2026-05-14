/**
 * Generated Tool: usersTool_0908
 * Domain: Users
 * ID: 0908
 */
exports.usersTool_0908 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0908:', error);
    throw error;
  }
};
