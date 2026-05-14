/**
 * Generated Tool: usersTool_0715
 * Domain: Users
 * ID: 0715
 */
exports.usersTool_0715 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0715:', error);
    throw error;
  }
};
