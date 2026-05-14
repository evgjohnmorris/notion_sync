/**
 * Generated Tool: workspacesTool_0893
 * Domain: Workspaces
 * ID: 0893
 */
exports.workspacesTool_0893 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0893:', error);
    throw error;
  }
};
