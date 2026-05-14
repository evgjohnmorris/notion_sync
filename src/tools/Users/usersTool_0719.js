/**
 * Generated Tool: usersTool_0719
 * Domain: Users
 * ID: 0719
 */
exports.usersTool_0719 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0719:', error);
    throw error;
  }
};
