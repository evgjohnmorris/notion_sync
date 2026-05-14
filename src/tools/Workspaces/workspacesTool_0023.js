/**
 * Generated Tool: workspacesTool_0023
 * Domain: Workspaces
 * ID: 0023
 */
exports.workspacesTool_0023 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0023:', error);
    throw error;
  }
};
