/**
 * Generated Tool: usersTool_0184
 * Domain: Users
 * ID: 0184
 */
exports.usersTool_0184 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0184:', error);
    throw error;
  }
};
