/**
 * Generated Tool: usersTool_0274
 * Domain: Users
 * ID: 0274
 */
exports.usersTool_0274 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0274:', error);
    throw error;
  }
};
