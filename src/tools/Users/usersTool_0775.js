/**
 * Generated Tool: usersTool_0775
 * Domain: Users
 * ID: 0775
 */
exports.usersTool_0775 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0775:', error);
    throw error;
  }
};
