/**
 * Generated Tool: usersTool_0142
 * Domain: Users
 * ID: 0142
 */
exports.usersTool_0142 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0142:', error);
    throw error;
  }
};
