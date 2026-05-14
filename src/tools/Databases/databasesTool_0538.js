/**
 * Generated Tool: databasesTool_0538
 * Domain: Databases
 * ID: 0538
 */
exports.databasesTool_0538 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0538:', error);
    throw error;
  }
};
