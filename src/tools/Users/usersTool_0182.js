/**
 * Generated Tool: usersTool_0182
 * Domain: Users
 * ID: 0182
 */
exports.usersTool_0182 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0182:', error);
    throw error;
  }
};
