/**
 * Generated Tool: usersTool_0174
 * Domain: Users
 * ID: 0174
 */
exports.usersTool_0174 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0174:', error);
    throw error;
  }
};
