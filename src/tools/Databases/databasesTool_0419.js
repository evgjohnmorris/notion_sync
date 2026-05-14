/**
 * Generated Tool: databasesTool_0419
 * Domain: Databases
 * ID: 0419
 */
exports.databasesTool_0419 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0419:', error);
    throw error;
  }
};
