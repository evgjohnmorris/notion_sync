/**
 * Generated Tool: usersTool_0731
 * Domain: Users
 * ID: 0731
 */
exports.usersTool_0731 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0731:', error);
    throw error;
  }
};
