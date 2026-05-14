/**
 * Generated Tool: databasesTool_0763
 * Domain: Databases
 * ID: 0763
 */
exports.databasesTool_0763 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0763:', error);
    throw error;
  }
};
