/**
 * Generated Tool: usersTool_0212
 * Domain: Users
 * ID: 0212
 */
exports.usersTool_0212 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0212:', error);
    throw error;
  }
};
