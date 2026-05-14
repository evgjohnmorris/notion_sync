/**
 * Generated Tool: workspacesTool_0737
 * Domain: Workspaces
 * ID: 0737
 */
exports.workspacesTool_0737 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0737:', error);
    throw error;
  }
};
