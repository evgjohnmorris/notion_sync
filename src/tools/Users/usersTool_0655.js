/**
 * Generated Tool: usersTool_0655
 * Domain: Users
 * ID: 0655
 */
exports.usersTool_0655 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0655:', error);
    throw error;
  }
};
