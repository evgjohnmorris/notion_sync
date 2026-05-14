/**
 * Generated Tool: workspacesTool_0713
 * Domain: Workspaces
 * ID: 0713
 */
exports.workspacesTool_0713 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0713:', error);
    throw error;
  }
};
