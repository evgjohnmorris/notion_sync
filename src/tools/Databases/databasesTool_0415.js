/**
 * Generated Tool: databasesTool_0415
 * Domain: Databases
 * ID: 0415
 */
exports.databasesTool_0415 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0415:', error);
    throw error;
  }
};
