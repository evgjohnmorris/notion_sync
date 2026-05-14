/**
 * Generated Tool: workspacesTool_0151
 * Domain: Workspaces
 * ID: 0151
 */
exports.workspacesTool_0151 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0151:', error);
    throw error;
  }
};
