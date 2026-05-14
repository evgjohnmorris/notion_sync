/**
 * Generated Tool: workspacesTool_0886
 * Domain: Workspaces
 * ID: 0886
 */
exports.workspacesTool_0886 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0886:', error);
    throw error;
  }
};
