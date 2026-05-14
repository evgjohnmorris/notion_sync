/**
 * Generated Tool: usersTool_0763
 * Domain: Users
 * ID: 0763
 */
exports.usersTool_0763 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0763:', error);
    throw error;
  }
};
