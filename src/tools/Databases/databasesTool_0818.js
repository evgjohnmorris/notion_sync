/**
 * Generated Tool: databasesTool_0818
 * Domain: Databases
 * ID: 0818
 */
exports.databasesTool_0818 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0818:', error);
    throw error;
  }
};
