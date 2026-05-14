/**
 * Generated Tool: usersTool_0576
 * Domain: Users
 * ID: 0576
 */
exports.usersTool_0576 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0576:', error);
    throw error;
  }
};
