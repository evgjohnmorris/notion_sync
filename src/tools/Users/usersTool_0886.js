/**
 * Generated Tool: usersTool_0886
 * Domain: Users
 * ID: 0886
 */
exports.usersTool_0886 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0886:', error);
    throw error;
  }
};
