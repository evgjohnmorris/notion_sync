/**
 * Generated Tool: databasesTool_0797
 * Domain: Databases
 * ID: 0797
 */
exports.databasesTool_0797 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0797:', error);
    throw error;
  }
};
